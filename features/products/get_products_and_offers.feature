Feature: Get Products

Background:
  Given Deliverer 'D1' registers with phone number '6481095678' and logs in
  And Deliverer 'D2' registers with phone number '6481107823' and logs in

Scenario: Get Products
  When Customer sends request to get products and offers
  Then Customer should receive products
  And all products should have an id
  And all products should have a name
  And all products should have a code

Scenario: Get Products Ordered By Offer Existence
  Given Deliverer 'D1' adds a new offer for product 'RED_APPLE'
  When Customer sends request to get products
  Then Customer should receive successful response
  And Customer should receive product 'RED_APPLE' in first place
