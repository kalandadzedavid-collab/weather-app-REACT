 export function formatDate(array: string | undefined | []): string | null {
    if (!array) return null;
    const date = array[0];

    const formatedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });

    return formatedDate;
  }

 export function formatDay(param: string) {
    const day = new Date(param).toLocaleDateString("en-US", {
      weekday: "long",
    });

    return day.substring(0, 3);
  }