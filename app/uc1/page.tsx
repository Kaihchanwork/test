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
            <CXFlow.ItemHeader>Page Visit</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Page Visit"
              eventName="Page Visit"
              eventParameters={[
                "pageName",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>


          <CXFlow.Item>
            <CXFlow.ItemHeader>Product Visit</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Product Page Visit"
              eventName="Product View"
              eventParameters={[
                "productName",
                "productId",
                "productCat",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>


        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Product Like</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Product Like"
              eventName="Product Like"
              eventParameters={[
                "productName",
                "productId",
                "productCat",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>


          <CXFlow.Item>
            <CXFlow.ItemHeader>Product Share</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Product Share"
              eventName="Product Share"
              eventParameters={[
                "productName",
                "productId",
                "productCat",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.Row>
        <CXFlow.Item>
            <CXFlow.ItemHeader>Registration</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Register on Website
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Registration"
              eventName="Registration"
              eventParameters={[
                "firstName",
                "lastName",
                "email",
                "phone",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        

        <CXFlow.NextStepCondition>
          Brochure Page Visit
        </CXFlow.NextStepCondition>
      </CXFlow>

      <CXFlow flowName="Consideration">
        <CXFlow.Row>
        <CXFlow.Item>
            <CXFlow.ItemHeader>Page Visit</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              If the pageName is Brochure
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Page Visit"
              eventName="Page Visit"
              eventParameters={[
                "pageName",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Page Visit from Email</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              If the UTM source is Email
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Page Visit from Email"
              eventName="Page Visit from Email"
              eventParameters={[
                "pageName",
                "utmSource",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>



        <CXFlow.Row>
        <CXFlow.Item>
            <CXFlow.ItemHeader>Web Event</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Download Event for Brochure
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Web Event"
              eventName="Web Event"
              eventParameters={[
                "eventType",
                "eventName",
                "eventURL",
                "pageURL",
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        

        <CXFlow.NextStepCondition>
          Product Purchase
        </CXFlow.NextStepCondition>
      </CXFlow>

      <CXFlow flowName="Purchase">
        <CXFlow.Row>
          <CXFlow.Item>
            <CXFlow.ItemHeader>Purchase</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Description
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Purchase"
              eventName="Order Purchase"
              eventParameters={[
                "id",
                "productName",
                "productId",
                "unit",
                "amount",
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


      <CXFlow flowName="Loyalty">
      <CXFlow.Row>
        <CXFlow.Item>
            <CXFlow.ItemHeader>Customer Day attended</CXFlow.ItemHeader>
            <CXFlow.ItemDescription>
              Attend Customer Day. Name: Customer Day, Status: Attended
            </CXFlow.ItemDescription>
            <CXFlow.ItemForm
              triggerLabel="Event"
              eventName="Event"
              eventParameters={[
                "eventType",
                "eventName",
                "eventStatus"
              ]}
              cdpSDK={typeof window !== "undefined" ? window.mvpCDP : null}
              isSDKLoaded={isLoaded}
            />
          </CXFlow.Item>
        </CXFlow.Row>

        <CXFlow.NextStepCondition>
          NA
        </CXFlow.NextStepCondition>
      </CXFlow>

    </div>
  );
};

export default HomePage;
