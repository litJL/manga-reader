import type { Reader } from "~/types/reader";

export const useReader = () => {
    return useState<Reader>("reader", () => {
        return {
            width: 50,
            gap: 0,
            direction: "vertical",
        };
    });
};
