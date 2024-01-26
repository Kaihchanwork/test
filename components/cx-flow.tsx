import { GigyaCDP } from "@/globals";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { prettyPrintCamelCase } from "@/lib/pretty-print-camel-case";
import { PropsWithChildren, use, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useGigya } from "@/lib/cdp-context";
import { useToast } from "./ui/use-toast";

interface CXFlowProps extends PropsWithChildren {
  flowName: string;
}

const CXFlow = (props: CXFlowProps) => (
  <Card className="flex flex-row w-full py-4 px-2 h-auto bg-slate-100 dark:bg-zinc-900">
    <p className="rotate-180 [writing-mode:vertical-lr] border-l-2 mr-2 text-center text-2xl">
      {props.flowName}
    </p>
    <div className="w-full">{props.children}</div>
  </Card>
);

const CXRow = (props: PropsWithChildren) => (
  <div className="flex flex-row w-full py-4 px-2 h-auto justify-around">
    {props.children}
  </div>
);

CXFlow.Row = CXRow;

const CXItem = (props: PropsWithChildren) => (
  <Card className="flex flex-col py-4 px-2 h-auto max-w-xs w-full gap-2">
    {props.children}
  </Card>
);

CXFlow.Item = CXItem;

const CXItemHeader = (props: PropsWithChildren) => (
  <div className="flex flex-row w-full px-2 text-lg">{props.children}</div>
);

CXFlow.ItemHeader = CXItemHeader;

const CXItemNotYetImplemented = () => (
  <Button variant="ghost">{"Not yet implemented"}</Button>
);

CXFlow.ItemNotYetImplemented = CXItemNotYetImplemented;

interface CXItemFormProps {
  triggerLabel?: string;
  eventName: string;
  eventParameters: string[];
  cdpSDK: GigyaCDP;
  isSDKLoaded: boolean;
}

const getLocalStorageKeyName = (eventName: string, eventParameterKey: string) =>
  `${eventName}-${eventParameterKey}`;

const CXItemForm = (props: CXItemFormProps) => {
  const { currentUID } = useGigya();
  const { toast } = useToast();

  // React needs default values to be there so that they are controlled inputs.
  // Setting them all to empty string.
  const defaultValues = useMemo(
    () =>
      props.eventParameters.reduce(
        (acc, eventParameterName) => ({
          ...acc,
          [eventParameterName]:
            (typeof window !== "undefined"
              ? window.localStorage.getItem(
                  getLocalStorageKeyName(props.eventName, eventParameterName)
                )
              : null) ?? "",
        }),
        {} as Record<string, string>
      ),
    [props.eventName, props.eventParameters]
  );

  const cxItemForm = useForm({ defaultValues });

  const onSubmit = (data: Record<string, string>) => {
    // Loop over all params and storage them to localStorage
    for (const [eventParameterName, eventParameterValue] of Object.entries(
      data
    )) {
      window.localStorage.setItem(
        getLocalStorageKeyName(props.eventName, eventParameterName),
        eventParameterValue
      );
    }

    const eventPayload = {
      crmId: currentUID,
      ...data,
    };

    if (!props.cdpSDK?.report) {
      toast({
        title: `No SDK for '${props.eventName}'`,
        description: <pre>{JSON.stringify(eventPayload, null, 4)}</pre>,
        variant: "destructive",
      });

      return;
    }

    props.cdpSDK.report(props.eventName, eventPayload);

    toast({
      title: `Triggered '${props.eventName}'`,
      description: <pre>{JSON.stringify(eventPayload, null, 4)}</pre>,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button disabled={!props.isSDKLoaded}>
          {props.triggerLabel ?? "Send"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form {...cxItemForm}>
          <form
            className="flex flex-col gap-1"
            onSubmit={cxItemForm.handleSubmit(onSubmit)}
          >
            <h3 className="font-semibold leading-none tracking-tight">
              &apos;{props.eventName}&apos; parameters
            </h3>
            {props.eventParameters.map((eventParameter) => (
              <FormField
                control={cxItemForm.control}
                key={eventParameter}
                name={eventParameter}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {prettyPrintCamelCase(eventParameter)}
                    </FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
            <p className="text-xs text-muted-foreground">
              Triggering for
              {currentUID === "" ? (
                <>
                  {" "}
                  <i>anonymous</i>
                </>
              ) : (
                ` crmId '${currentUID}'`
              )}
            </p>
            <Button className="mt-2" type="submit">
              Trigger Event
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
};

CXFlow.ItemForm = CXItemForm;

const CXItemDescription = (props: PropsWithChildren) => (
  <div className="flex flex-row w-full px-2 text-sm">{props.children}</div>
);

CXFlow.ItemDescription = CXItemDescription;

const CSNextStepCondition = (props: PropsWithChildren) => (
  <CXRow>
    <Card className="flex w-full gap-2 p-2">
      <p className="text-center font-semibold">Condition to progress:</p>
      {props.children}
    </Card>
  </CXRow>
);

CXFlow.NextStepCondition = CSNextStepCondition;

export default CXFlow;
