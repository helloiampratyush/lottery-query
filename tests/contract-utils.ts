import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  RequestFulfilled,
  RequestSent,
  lotteryAnnounceMent,
  lotteryForceEnded,
  winnerPicked
} from "../generated/Contract/Contract"

export function createRequestFulfilledEvent(
  requestId: BigInt,
  randomWords: Array<BigInt>
): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam(
      "randomWords",
      ethereum.Value.fromUnsignedBigIntArray(randomWords)
    )
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(
  requestId: BigInt,
  numWords: BigInt
): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  requestSentEvent.parameters.push(
    new ethereum.EventParam(
      "numWords",
      ethereum.Value.fromUnsignedBigInt(numWords)
    )
  )

  return requestSentEvent
}

export function createlotteryAnnounceMentEvent(
  counterNo: BigInt,
  entranceFee: BigInt,
  timeStamp: BigInt,
  endTime: BigInt,
  minplayers: BigInt
): lotteryAnnounceMent {
  let lotteryAnnounceMentEvent = changetype<lotteryAnnounceMent>(newMockEvent())

  lotteryAnnounceMentEvent.parameters = new Array()

  lotteryAnnounceMentEvent.parameters.push(
    new ethereum.EventParam(
      "counterNo",
      ethereum.Value.fromUnsignedBigInt(counterNo)
    )
  )
  lotteryAnnounceMentEvent.parameters.push(
    new ethereum.EventParam(
      "entranceFee",
      ethereum.Value.fromUnsignedBigInt(entranceFee)
    )
  )
  lotteryAnnounceMentEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )
  lotteryAnnounceMentEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  lotteryAnnounceMentEvent.parameters.push(
    new ethereum.EventParam(
      "minplayers",
      ethereum.Value.fromUnsignedBigInt(minplayers)
    )
  )

  return lotteryAnnounceMentEvent
}

export function createlotteryForceEndedEvent(
  lotteryCounter: BigInt
): lotteryForceEnded {
  let lotteryForceEndedEvent = changetype<lotteryForceEnded>(newMockEvent())

  lotteryForceEndedEvent.parameters = new Array()

  lotteryForceEndedEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryCounter",
      ethereum.Value.fromUnsignedBigInt(lotteryCounter)
    )
  )

  return lotteryForceEndedEvent
}

export function createwinnerPickedEvent(
  winner: Address,
  lotteryCounter: BigInt
): winnerPicked {
  let winnerPickedEvent = changetype<winnerPicked>(newMockEvent())

  winnerPickedEvent.parameters = new Array()

  winnerPickedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  winnerPickedEvent.parameters.push(
    new ethereum.EventParam(
      "lotteryCounter",
      ethereum.Value.fromUnsignedBigInt(lotteryCounter)
    )
  )

  return winnerPickedEvent
}
