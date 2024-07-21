export type Quality = "data" | "data-saver";
export const useQuality = () => {
    return useState<Quality>("quality", () => "data-saver");
};
