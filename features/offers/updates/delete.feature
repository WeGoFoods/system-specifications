Feature: Delete An Offer

  Background:
    Given Deliverer 'D1' registers with phone number '6483516383' and password 'secret1'
    And Deliverer 'D1' logs in with phone number '6483516383' and password 'secret1'
    Given Deliverer 'D1' publishes a new offer

  Scenario: Delete An Offer
    When Deliverer 'D1' deletes the last published offer
    Then Deliverer should receive successful response
