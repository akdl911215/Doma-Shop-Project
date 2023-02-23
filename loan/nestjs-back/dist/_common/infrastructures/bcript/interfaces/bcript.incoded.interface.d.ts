export interface BcriptIncodedInterface {
    readonly incoded: (password: string) => Promise<string>;
}
