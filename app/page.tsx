import MainItem from "./components/MainItem";

interface Issue {
    id: number;
    image: string;
    alt: string;
    title: string;
    isSoldOut: boolean;
    bgColor: string;
}

// json-server --watch --port 4000 .\_data\issues.json
const getIssues = async() => {
    const res = await fetch('http://localhost:4000/issues', {
        next: { revalidate: 30 }
    });
    return res.json();
}



export default async function Home() {
  const issues = await getIssues();
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {issues.map((issues: Issue) => (
        <MainItem
          key={issues.alt}
          image={issues.image}
          alt={issues.alt}
          title={issues.title}
          isSoldOut={issues.isSoldOut}
          bgColor={issues.bgColor}
        />
      ))
      }
    </main>
  );
}
