export interface BcriptDecodedInterface {
  readonly decoded: (
    password: string,
    hashPassword: string
  ) => Promise<boolean>;
}
