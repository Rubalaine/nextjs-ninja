import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>ALl Ninjas</h1>
      {ninjas.map((ninja, i) => (
        <Link key={i} href={"/ninjas/" + ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
