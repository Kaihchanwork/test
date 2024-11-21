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
          CMW
        </CXOverview.Description>

        <CXOverview.AttributeGroups>
          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              Web Event Trigger Page
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute> - User can trigger Web Event and ingest into CMW CDP Dev Tenant </CXOverview.Attribute>
          </CXOverview.AttributeGroup>         
        </CXOverview.AttributeGroups>
      </CXOverview>

      <CXFlow flowName="General">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Page Visit</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="WebsitePageView"
              eventName="WebsitePageView"
              eventParameters={[
                "pageURL",
              ]}
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
