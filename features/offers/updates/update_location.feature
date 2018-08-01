Feature: Update Offer Location

Background:
  Given Deliverer 'D1' registers with phone number '6483516383' and password 'secret1'
  And Deliverer 'D1' logs in with phone number '6483516383' and password 'secret1'

Scenario: Update Offer (Deliverer) Location
  Given Deliverer 'D1' publishes a new offer
  When Deliverer 'D1' updates offer location
  Then Deliverer should receive successful response

Scenario: Notify Offer Location Update
  Given Customer sends request to get offers grouped by product with location '28.1867048', '-105.4600849'
  And Customer subscribes to get offers updates with location '28.1867048', '-105.4600849'
  And Deliverer 'D1' publishes a new offer for product 'CORN_TORTILLA' with location '28.1867048', '-105.4700849' and delivery radius of 1 KM
  When Deliverer 'D1' updates offer location to '28.1867048', '-105.4782849'
  Then the offer location for product 'CORN_TORTILLA' should be updated to '28.1867048', '-105.4782849'

Scenario: Do Not Notify Offer Location Update If Customer Disconnected Subscription
  Given Customer sends request to get offers grouped by product with location '28.1867048', '-105.4600849'
  And Customer subscribes to get offers updates with location '28.1867048', '-105.4600849'
  And Deliverer 'D1' publishes a new offer for product 'CORN_TORTILLA' with location '28.1867048', '-105.4700849' and delivery radius of 1 KM
  And Deliverer 'D1' updates offer location to '28.1867048', '-105.4782849'
  And Customer disconnects subscription for updates
  And Deliverer 'D1' updates offer location to '28.1866048', '-105.4786849'
  Then the offer location for product 'CORN_TORTILLA' should be updated to '28.1867048', '-105.4782849'