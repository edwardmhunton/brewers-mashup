export const FilteredBreweries = (breweries) => {
  return breweries.filter(
    (element) => element.longitude !== null && element.latitude !== null
  );
};


