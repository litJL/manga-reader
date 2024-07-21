import type { Reader } from "~/types/reader";

export const useReader = () => {
    return useState<Reader>("reader", () => {
        return {
            width: 100,
            gap: 0,
            direction: "vertical",
        };
    });
};
