export const latitudeBounds = {
  min: -90,
  max: 90,
};

export const longitudeBounds = {
  min: -180,
  max: 180,
};

export const getDefaultPaginationOptions = {
  showTotal: (total, range) =>
    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
};
