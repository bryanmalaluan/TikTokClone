/**
 * Returns boolean value that checks if props values changed
 *
 * usage: export default memo(Component, arePropsEqual<'Type'>(['fieldName']));
 */
export const arePropsEqual =
  <T>(fields: (keyof T)[]) =>
  (prevProps: T, nextProps: T): boolean => {
    return !fields.find((field) => prevProps[field] !== nextProps[field]);
  };
