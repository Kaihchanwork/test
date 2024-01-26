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
          Ball Project
        </CXOverview.Description>

        <CXOverview.AttributeGroups>
          <CXOverview.AttributeGroup>
            <CXOverview.AttributeGroupName>
              Criteria1:
            </CXOverview.AttributeGroupName>

            <CXOverview.Attribute>Like any product</CXOverview.Attribute>
          </CXOverview.AttributeGroup>         
        </CXOverview.AttributeGroups>
      </CXOverview>

      <CXFlow flowName="Awareness">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>PageVisit</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              This is a description of the Biomaterial Landing Page
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="View Page"
              eventName="Page Visit"
              eventParameters={[
                "pageName",
                "pageURL",
              ]}
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
