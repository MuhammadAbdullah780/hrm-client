import { useQuery } from "@tanstack/react-query";

type Payload<J> =
  | J
  | {
      docs: J;
      // TODO: will define ts later
      meta: any;
    };

type Options<K> = {
  tags?: string[];
  fetcher: () => Promise<Payload<K>>;
};

type ChildrenArgs<T> = {
  data: Payload<T>;
};

const WithClientFetch =
  <K,>(Component: React.FC<ChildrenArgs<K>>) =>
  (props: Options<K>) => {
    const { tags = [], fetcher } = props || {};

    const { data, error, isError, isFetched, isLoading, isSuccess } = useQuery({
      queryKey: tags,
      queryFn: fetcher,
    });

    if (isLoading) {
      return <h1>loading</h1>;
    }

    if (isError) {
      return <h1>error</h1>;
    }

    return <Component data={data!} />;
  };

export default WithClientFetch;
