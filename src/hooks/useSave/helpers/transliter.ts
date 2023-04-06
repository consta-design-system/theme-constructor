export function toTranslit(text: string) {
  const transliterral = text.replace(
    /([а-яё])|([\s_-])|([^a-z\d])/gi,
    function (_all, ch: string, space: string, words: string) {
      if (space || words) {
        return space ? ' ' : '';
      }
      const code = ch.charCodeAt(0);

      const getIndex = (code: number) => {
        if (code === 1025 || code === 1105) return 0;
        if (code > 1071) return code - 1071;
        return code - 1039;
      };
      const index = getIndex(code);
      const t = [
        'yo',
        'a',
        'b',
        'v',
        'g',
        'd',
        'e',
        'zh',
        'z',
        'i',
        'y',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'r',
        's',
        't',
        'u',
        'f',
        'h',
        'c',
        'ch',
        'sh',
        'shch',
        '',
        'y',
        '',
        'e',
        'yu',
        'ya',
      ];
      return t[index];
    },
  );
  return transliterral
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export const toCapitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
