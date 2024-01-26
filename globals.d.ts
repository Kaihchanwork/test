export type GigyaCDP = {
    report: (eventName: string, data: any) => void,
} | null

declare global {
    interface Window {
        gigya: {
            cdp: {
                init: (config: any) => Promise<any>,
            }
        }
        skillCDP: GigyaCDP;
        eshopCDP: GigyaCDP;
        mvpCDP: GigyaCDP;
    }
}
