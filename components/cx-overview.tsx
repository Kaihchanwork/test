import { PropsWithChildren } from "react";
import { Dot } from "lucide-react";

const CXOverview = (props: PropsWithChildren) => (
  <div className="flex flex-col w-full gap-2 py-4">{props.children}</div>
);

const CSDescription = (props: PropsWithChildren) => (
  <p className="">{props.children}</p>
);

CXOverview.Description = CSDescription;

const CXAttributeGroups = (props: PropsWithChildren) => (
  <div className="flex gap-10">{props.children}</div>
);

CXOverview.AttributeGroups = CXAttributeGroups;

const CXAttributeGroup = (props: PropsWithChildren) => (
  <div>
    <ul>{props.children}</ul>
  </div>
);

CXOverview.AttributeGroup = CXAttributeGroup;

const CXAttributeGroupName = (props: PropsWithChildren) => (
  <p className="font-semibold">{props.children}</p>
);

CXOverview.AttributeGroupName = CXAttributeGroupName;

const CXAttribute = (props: PropsWithChildren) => (
  <div className="flex">
    <Dot />
    <li>{props.children}</li>
  </div>
);

CXOverview.Attribute = CXAttribute;

export default CXOverview;
