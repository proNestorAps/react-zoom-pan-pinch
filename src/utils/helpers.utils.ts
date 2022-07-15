export const isExcludedNode = (
  node: HTMLElement,
  excludedTagsOrClassNames: Array<string>,
): boolean => {
  const targetTagName = node.tagName.toUpperCase();
  const isExcludedTag = excludedTagsOrClassNames.some(
    (tag) => tag.toUpperCase() === targetTagName,
  );
  if (isExcludedTag) {
    return true;
  }

  const containsExcludedCssClass = excludedTagsOrClassNames.some((className) =>
    node.classList.contains(className),
  );
  return containsExcludedCssClass;
};

export const cancelTimeout = (
  timeout: ReturnType<typeof setTimeout> | null,
): void => {
  if (timeout !== null) {
    clearTimeout(timeout);
  }
};
