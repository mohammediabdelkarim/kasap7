import ListeLogements from "@/assets/api/logements.json";

let GetAllLogement = () => {
    return ListeLogements;
}

let GetLogementById = async (id) => {
    const Logement = await ListeLogements.find(logement => logement.id === id);
    return Logement;
}

export const Service = {
    GetAllLogement,
    GetLogementById,
}

export default Service
