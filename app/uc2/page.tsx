"use client";

import CXOverview from "@/components/cx-overview";
import CXFlow from "@/components/cx-flow";
import { useEffect } from "react";
import { useGigya } from "@/lib/cdp-context";

const HomePage = () => {
  const { isLoaded } = useGigya();

  return (
    <div className="flex flex-col gap-4">
      <CXOverview>
        <CXOverview.Description>
          The dental scanner use-case is a journey that aims to help the
          customer to get started with the dental scanner.
        </CXOverview.Description>

        <CXOverview.AttributeGroups>
          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              Demographical Information:
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute>Country: DE</CXOverview.Attribute>
          </CXOverview.AttributeGroup>
        </CXOverview.AttributeGroups>
      </CXOverview>

      <CXFlow flowName="Service Contract">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Service Contact Creation</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Service Contact Creation
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Create Service Contract"
              eventName="Service Contract Creation MVP"
              eventParameters={["email", "contractId"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>
      </CXFlow>

      <CXFlow flowName="Training Type">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Training Type Selection</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Training Type Selection
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Select Training Type"
              eventName="Training Type Selection MVP"
              eventParameters={["trainingType"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>
      </CXFlow>

      <CXFlow flowName="Digital Scanner Program">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Digital Program Enrollment</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Digital Program Enrollment
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Enroll in Digital Program"
              eventName="Digital Program Enrollment MVP"
              eventParameters={[]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>
      </CXFlow>

      <CXFlow flowName="Learning Journey">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Learning Journey Completion</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Learning Journey Completion
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Complete Learning Journey"
              eventName="Learning Journey Completion MVP"
              eventParameters={[]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>
      </CXFlow>

      <CXFlow flowName="Delivery Note">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Delivery Note Creation</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Delivery Note Creation
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Create Delivery Note"
              eventName="Delivery Note Creation MVP"
              eventParameters={[]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>
      </CXFlow>
    </div>
  );
};

export default HomePage;
