/** Date **/
type DateType = Date;
export type DateInformation = {
  createdAt: DateType;
  lastModifiedAt: DateType;
};

/** Image **/
export type StoredImage = {
  src: string;
  altText: string;
};
