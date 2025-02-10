import { useLoaderData } from "react-router-dom";

interface ProgramsTypes {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  country: string;
  year: number;
}

export default function Programs() {
  const programs = useLoaderData() as ProgramsTypes[];
  console.info(programs);

  return (
    <section className="series-list">
      {programs.map((programs) => (
        <div key={programs.id} className="card-serie">
          <h2>{programs.title}</h2>
          <img src={programs.poster} alt="" className="img-series" />
          <p>{programs.synopsis}</p>
          <p>{programs.country}</p>
          <h4>{programs.year}</h4>
        </div>
      ))}
    </section>
  );
}
