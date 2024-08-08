interface PropTypes {
  exceedResultLength: boolean;
  noResults: boolean;
  error: boolean;
}

export const SearchMessage = ({
  exceedResultLength,
  noResults,
  error,
}: PropTypes) => {
  return exceedResultLength ? (
    <p className="text-sm mt-2">
      Si no has encontrado tu jugador, prueba ser más específico.
    </p>
  ) : noResults ? (
    <p className="text-sm mt-2">No se han encontrado resultados.</p>
  ) : error ? (
    <p className="text-sm mt-2">Ha ocurrido un error con el servidor.</p>
  ) : null;
};
