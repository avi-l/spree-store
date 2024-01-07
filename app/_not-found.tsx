export default function NotFound() {
  return <pre>Not Found!</pre>;
}

export async function getServerSideProps() {
  return { props: {} };
}
