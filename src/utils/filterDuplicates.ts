import { Player } from "@/app/page";

export function filterDuplicates(arr: Player[], key: keyof Player): Player[] {
  const seen = new Set();
  return arr.filter((item: Player) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    } else {
      seen.add(value);
      return true;
    }
  });
}
