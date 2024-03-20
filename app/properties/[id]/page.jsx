"use client";
import { useParams, useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  return (
    <div>
      <h1>PropertyPage</h1>
      <button className="bg-blue-500 p-2" onClick={() => router.push("/")}>
        Go Home {id}
      </button>
    </div>
  );
};

export default PropertyPage;
