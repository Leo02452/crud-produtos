export type SearchQueryFormFields = {
  search?: string;
};

export type SearchQueryFormProps = {
  onUpdate(data: SearchQueryFormFields): void;
};
