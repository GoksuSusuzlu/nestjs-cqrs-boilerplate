export class SuccessResponseDto<T> {
    constructor(public readonly data: T, public readonly message: string = 'Success') {}
  }