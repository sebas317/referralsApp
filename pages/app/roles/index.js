import { request, gql } from "graphql-request";

const query = gql`
query {
    role {
      created_at
      id
      name
      updated_at
    }
  }
`;

export async function getStaticProps() {
  const { role } = await request(
    "http://localhost:8080/v1/graphql",
    query
  );
  return {
    props: {
      role,
    },
  };
}

const Home = ({ role }) => {
    return (
      <main>
        {role.map((role) => (
          <article key={role.id}>
            <h2>{role.name}</h2>
          </article>
        ))}
      </main>
    );
  };
  
  export default Home;