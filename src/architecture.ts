export const LAYERS = [
  {
    id: "obzue",
    name: "ObzueAI",
    role: "Parent",
    summary: "The company. It owns the brand, the charter, and both products that sit under it.",
    detail:
      "ObzueAI is not the engine. It is the house: marketplace rules, the twenty percent fee, escrow, and the decision to keep a consumer companion off the robotics floor.",
  },
  {
    id: "os",
    name: "SI MemBrain",
    role: "Operating layer",
    summary: "Memory plus an execution brain. A decision can be stopped after it is remembered.",
    detail:
      "The name is the product. Episodic memory on one side, a causal brain on the other. Nothing on this floor acts from a guess alone.",
  },
  {
    id: "core",
    name: "Core",
    role: "Memory and skills",
    summary: "ACP packages, the Zettel graph, and the AST guard.",
    detail:
      "Every account boots Core. Skills are files with a SKILL.md. The guard reads the tool body outside the model. A failed run becomes a written constraint, not a forgotten log.",
  },
  {
    id: "matrix",
    name: "Matrix",
    role: "Registry",
    summary: "Paid skills. Eighty to the maker, twenty to the platform.",
    detail:
      "Third parties publish here. Install spends credits. The split is visible before you pay. Unscanned packages do not get a listing.",
  },
  {
    id: "cortex",
    name: "Cortex",
    role: "Bodies",
    summary: "ROS 2, road edges, and airframes. The fast loop never sees the model.",
    detail:
      "Humanoids, vehicles, and uncrewed aircraft share one problem: a net asked to be a safety system. Cortex is the adapter. The twin agrees, or the maneuver holds.",
  },
  {
    id: "corta",
    name: "Corta on the floor",
    role: "Cortical layer",
    summary: "One voice per platform account. She watches the sandbox, the twin, lives, and contracts.",
    detail:
      "This Corta does not live on a phone. She is the co-pilot for builders, garages, schools, and OEMs. She can pause a live if a safety file moves. She does not open your personal inbox.",
  },
] as const;

export const SEAM = {
  id: "seam",
  name: "The cut",
  role: "Where a second product starts",
  summary: "The same voice, uncoupled from the floor, for people who will never ship a skill.",
  detail:
    "Past this line Corta is no longer a platform co-pilot. She is My Corta Companion: a local desk for a person, a guardian, or an elder. The companion is the app entity, not this web repository. The membrane is its own repository.",
};

export type LayerId = (typeof LAYERS)[number]["id"];
