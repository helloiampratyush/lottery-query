import {
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  lotteryAnnounceMent as lotteryAnnounceMentEvent,
  lotteryForceEnded as lotteryForceEndedEvent,
  winnerPicked as winnerPickedEvent
} from "../generated/Contract/Contract"
import {
  RequestFulfilled,
  RequestSent,
  lotteryAnnounceMent,
  lotteryForceEnded,
  winnerPicked
} from "../generated/schema"

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.randomWords = event.params.randomWords

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.numWords = event.params.numWords

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelotteryAnnounceMent(
  event: lotteryAnnounceMentEvent
): void {
  let entity = new lotteryAnnounceMent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.counterNo = event.params.counterNo
  entity.entranceFee = event.params.entranceFee
  entity.timeStamp = event.params.timeStamp
  entity.endTime = event.params.endTime
  entity.minplayers = event.params.minplayers

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelotteryForceEnded(event: lotteryForceEndedEvent): void {
  let entity = new lotteryForceEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lotteryCounter = event.params.lotteryCounter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlewinnerPicked(event: winnerPickedEvent): void {
  let entity = new winnerPicked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.winner = event.params.winner
  entity.lotteryCounter = event.params.lotteryCounter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
