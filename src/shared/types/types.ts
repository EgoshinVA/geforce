import { ResultCode } from '@/shared/types/enums'

export type BaseResponse<T = undefined> = {
  resultCode: ResultCode
  messages: string[]
  data?: T
}