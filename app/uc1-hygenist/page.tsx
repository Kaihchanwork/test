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
          Test.
        </CXOverview.Description>

        <CXOverview.AttributeGroups>
          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              Demographical Information:
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute>Organization Type: Any</CXOverview.Attribute>
            <CXOverview.Attribute>
              Profession: Dental Hygenist (06)
            </CXOverview.Attribute>

            <CXOverview.Attribute>Country: UK</CXOverview.Attribute>
          </CXOverview.AttributeGroup>

          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              No biomaterials purchase in past 3 months:
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute>
              Not yet aware of biomaterials
            </CXOverview.Attribute>
            <CXOverview.Attribute>Starts from awareness</CXOverview.Attribute>
          </CXOverview.AttributeGroup>

          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              Purchased biomaterials in past 3-6 months:
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute>
              Aware of biomaterials, but no recent purchases
            </CXOverview.Attribute>
            <CXOverview.Attribute>
              Starts from consideration
            </CXOverview.Attribute>
          </CXOverview.AttributeGroup>
        </CXOverview.AttributeGroups>
      </CXOverview>

      <CXFlow flowName="Awareness">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Biomaterial Landing Page</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Biomaterial Landing Page
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="View Page"
              eventName="AEM PageView MVP"
              eventParameters={["pageSource"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Video</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Video
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Play Video"
              eventName="AEM Video Play MVP"
              eventParameters={["videoName"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>

          <CXFlow.Item>
            <CXFlow.ItemHeader>Testimonial</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Testimonial
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Play Video"
              eventName="AEM Video Play MVP"
              eventParameters={["videoName"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.NextStepCondition>
          The user watched either the video or the testominial.
        </CXFlow.NextStepCondition>
      </CXFlow>

      <CXFlow flowName="Consideration">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Read Clinical Study</CXFlow.ItemHeader>
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Case Book</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              A case book describing the use of the biomaterials.
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Read Book"
              eventName="AEM Event MVP"
              eventParameters={["eventType"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>

          <CXFlow.Item>
            <CXFlow.ItemHeader>Webinar</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              A webinar describing the use of the biomaterials.
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Book"
              eventName="SKILL Course Booked MVP"
              eventParameters={["courseName"]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.NextStepCondition>
          The user downloaded the case book or booked the webinar.
        </CXFlow.NextStepCondition>
      </CXFlow>

      <CXFlow flowName="Engagement">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Shop</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              The biomaterials product pages.
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Purchase"
              eventName="Eshop Ordered Product MVP"
              eventParameters={[
                "productName",
                "category",
                "quantity",
                "unitPrice",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.NextStepCondition>
          The users&apos; organization places a purchase for a biomaterials
          product.
        </CXFlow.NextStepCondition>
      </CXFlow>
    </div>
  );
};

export default HomePage;
