import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { RequestFulfilled } from "../generated/schema"
import { RequestFulfilled as RequestFulfilledEvent } from "../generated/Contract/Contract"
import { handleRequestFulfilled } from "../src/contract"
import { createRequestFulfilledEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requestId = BigInt.fromI32(234)
    let randomWords = [BigInt.fromI32(234)]
    let newRequestFulfilledEvent = createRequestFulfilledEvent(
      requestId,
      randomWords
    )
    handleRequestFulfilled(newRequestFulfilledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RequestFulfilled created and stored", () => {
    assert.entityCount("RequestFulfilled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RequestFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestId",
      "234"
    )
    assert.fieldEquals(
      "RequestFulfilled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "randomWords",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
