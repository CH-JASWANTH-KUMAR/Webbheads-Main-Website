"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Linkedin, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  detailDescription?: string;
  photoUrl: string;
  linkedinUrl?: string;
};

const TEAM_MEMBERS: TeamMember[] = [
    {
    id: "member-1",
    name: "DJ Kushal",
    role: "Founder and CEO",
    bio: "A curious learner with a positive mindset and a strong work ethic, always eager to grow",
    detailDescription: "Kushal didn't wait for the right moment — he built it. A GITAM graduate who spent the last two to three years deep inside the real estate industry, he understands the business from both sides of the table. He knows how deals are won, where agencies lose leads, and exactly what a property brand needs to compete digitally. Add a natural ability to negotiate and a vision for what real estate tech should look like — WebbHeads is the result of all of it coming together.",
    photoUrl: "/team/Kushal.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/menda-srividhya-662450345?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
    {
    id: "member-2",
    name: "Ch Jaswanth Kumar",
    role: "Full stack Developer",
    bio: "Ships clean, thinks in systems, and never leaves a bug for tomorrow.",
    detailDescription: "Second year at College and already deep in the stack. Jaswanth is the kind of developer who doesn't stop at it works — he asks why it works and how to make it faster. Drawn to the full picture of how products are built, he found his way to WebbHeads to work on something that actually ships. Real estate tech wasn't on his radar until he saw the gap — now he can't unsee it.",
    photoUrl: "/team/JASWANTH-KUMAR-CHETTUPALLI.png",
    linkedinUrl: "https://linkedin.com/in/jaswanth-kumar-chettupalli-7b0809333",
  },
    {
    id: "member-3",
    name: "Ch Pavan Kumar",
    role: "Full stack Developer",
    bio: "Equally comfortable on the front and the back — the kind of dev who reads error logs for fun",
    detailDescription:"Pavan came into his second year at College knowing he wanted to build things that matter — not just assignments, but real products with real users. At WebbHeads he's doing exactly that, writing code that powers live client experiences. He moves fast, thinks in systems, and is quietly one of the most reliable people on the team when a deadline is real.",
    photoUrl: "/team/Pavan.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/cherukuripavankumar369/",
  },
    {
    id: "member-4",
    name: "Revanth Peethala",
    role: "Web Developer",
    bio: "Four years of learning distilled into one thing — building web experiences that actually work.",
    detailDescription: "Four years at GITAM means Revanth has seen how most developers think — and decided to think differently. With more experience than most interns walk in with, he brings a maturity to his code that shows up in the details: clean structure, thoughtful decisions, nothing sloppy. At WebbHeads he's not just building pages, he's building his last chapter at university into something worth talking about after graduation.",
    photoUrl: "/team/REVANTH.jpeg",
    linkedinUrl: "www.linkedin.com/in/revanthpeethala",
  },
    {
    id: "member-5",
    name: "Menda Srividhya",
    role: "Sales and marketing",
    bio: "A curious learner with a positive mindset and a strong work ethic, always eager to grow",
    detailDescription: "Srividhya is the voice of WebbHeads to the world. With a background in sales and marketing, she knows how to connect with people and tell stories that resonate. She's not just about selling — she's about building relationships and creating a brand that stands for something. At WebbHeads, she's crafting the narrative that will make us more than just another real estate tech company.",
    photoUrl: "/team/MENDA-SRIVIDHYA.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/menda-srividhya-662450345?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },

];

const EMPTY_CARD_COUNT = 5;

export default function AboutUs() {
  const { isDark } = useTheme();
  const { tr } = useLanguage();
  const [selectedMemberId, setSelectedMemberId] = useState<string>("");

  const sectionBg = "bg-transparent";
  const titleColor = isDark ? "text-white" : "text-[#0f1f1b]";
  const copyColor = isDark ? "text-white/70" : "text-[#4a6660]";
  const primaryButtonClass = isDark
    ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
    : "bg-white border border-[#dce8e2] text-[#0f1f1b] hover:border-[#b8d0c5]";
  const cardClass = isDark
    ? "bg-white/[0.04] border border-white/15"
    : "bg-white border border-[#dce8e2] hover:border-[#b8d0c5] hover:shadow-[0_4px_24px_rgba(26,60,52,0.07)]";
  const roleColor = isDark ? "text-white/50" : "text-[#8aaba3]";
  const bioColor = isDark ? "text-white/55" : "text-[#4a6660]";
  const mutedSurface = isDark ? "bg-white/10" : "bg-[#edf1ee]";
  const detailCardClass = isDark
    ? "bg-[#0c1714] border border-white/15"
    : "bg-white border border-[#dce8e2]";
  const detailTextColor = isDark ? "text-white/70" : "text-[#4a6660]";
  const modalOverlay = isDark ? "bg-black/70" : "bg-[#0f1f1b]/55";

  const cards =
    TEAM_MEMBERS.length > 0
      ? TEAM_MEMBERS
      : Array.from({ length: EMPTY_CARD_COUNT }, (_, index) => ({
          id: `empty-${index + 1}`,
          name: "",
          role: "",
          bio: "",
          detailDescription: "",
          photoUrl: "",
          linkedinUrl: "",
        }));

  const selectedMember = cards.find((member) => member.id === selectedMemberId);

  const roleMap: Record<string, string> = {
    "Founder and CEO": "స్థాపకుడు మరియు CEO",
    "Full stack Developer": "ఫుల్ స్టాక్ డెవలపర్",
    "Web Developer": "వెబ్ డెవలపర్",
    "Sales and marketing": "సేల్స్ మరియు మార్కెటింగ్",
  };

  const bioMap: Record<string, string> = {
    "A curious learner with a positive mindset and a strong work ethic, always eager to grow": "ధనాత్మక దృక్పథం మరియు బలమైన పని నైతికతతో ఎప్పుడూ నేర్చుకోవడానికి సిద్ధంగా ఉండే వ్యక్తి.",
    "Ships clean, thinks in systems, and never leaves a bug for tomorrow.": "శుభ్రమైన కోడ్, వ్యవస్థాత్మక ఆలోచన, మరియు సమస్యలను వెంటనే పరిష్కరించే అభ్యాసం.",
    "Equally comfortable on the front and the back — the kind of dev who reads error logs for fun": "ఫ్రంట్ ఎండ్, బ్యాక్ ఎండ్ రెండింటిలోనూ సమాన నైపుణ్యం కలిగిన డెవలపర్.",
    "Four years of learning distilled into one thing — building web experiences that actually work.": "నాలుగు సంవత్సరాల అభ్యాసాన్ని నిజంగా పనిచేసే వెబ్ అనుభవాలుగా మార్చిన అభివృద్ధి కర్త.",
  };

  return (
    <section id="team" className={`py-12 md:py-16 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <div className="flex flex-col gap-6 md:gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2
                className={`text-3xl leading-[1.02] font-bold tracking-[-0.03em] md:text-5xl ${titleColor}`}
              >
                {tr("Meet the Builders Behind", "వెనుక ఉన్న సృష్టికర్తలను కలవండి")}
                <br />
                WebbHeads
              </h2>

              <p className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${copyColor}`}>
                {tr(
                  "We're a hands-on team building high-performance websites, automation systems, and growth-focused digital experiences for modern brands.",
                  "ఆధునిక బ్రాండ్ల కోసం హై-పర్ఫార్మెన్స్ వెబ్‌సైట్లు, ఆటోమేషన్ సిస్టమ్స్, మరియు వృద్ధి-కేంద్రీకృత డిజిటల్ అనుభవాలను నిర్మించే జట్టు మేము."
                )}
              </p>
            </div>

            <div className="self-start md:self-auto flex items-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-colors duration-200 ${primaryButtonClass}`}
              >
                {tr("Meet Everyone", "అందరినీ కలవండి")}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {cards.map((member, index) => {
            const hasContent = Boolean(member.name || member.role || member.bio);

            return (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`mx-auto flex h-[430px] w-full max-w-[340px] flex-col sm:max-w-none rounded-3xl p-4 transition-all duration-200 ease-out hover:-translate-y-[2px] ${cardClass}`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl aspect-[4/4] ${mutedSurface}`}
                >
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={member.name || "Team member"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                      className="object-cover"
                    />
                  ) : null}

                  {member.linkedinUrl ? (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tr("Open LinkedIn profile", "LinkedIn ప్రొఫైల్ తెరవండి")}
                      className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                        isDark
                          ? "bg-black/45 text-white hover:bg-black/60"
                          : "bg-white text-[#4a6660]"
                      }`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>

                <div className="mt-4 min-h-[98px] space-y-1.5">
                  <h3 className={`text-xl md:text-[1.35rem] font-semibold leading-snug tracking-[-0.01em] ${titleColor}`}>
                    {member.name}
                  </h3>
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${roleColor}`}>
                    {tr(member.role, roleMap[member.role] ?? member.role)}
                  </p>
                  <p className={`pt-1 text-sm leading-relaxed line-clamp-2 ${bioColor}`}>
                    {tr(member.bio, bioMap[member.bio] ?? member.bio)}
                  </p>
                </div>

                {hasContent ? (
                  <button
                    type="button"
                    onClick={() => setSelectedMemberId(member.id)}
                    aria-label={tr(`Show details for ${member.name}`, `${member.name} వివరాలు చూపండి`)}
                    className={`mt-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isDark
                        ? "bg-white/10 text-white/80 hover:bg-white/15"
                        : "bg-[#f1f6f3] text-[#4a6660] hover:bg-[#e8f2ed]"
                    }`}
                  >
                    {tr("Details", "వివరాలు")}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : null}

                {!hasContent ? (
                  <span className="sr-only">{tr("Empty team member slot", "ఖాళీ టీమ్ సభ్యుడు స్థానం")}</span>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedMember?.name ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 ${modalOverlay}`}
          role="dialog"
          aria-modal="true"
          aria-label={tr(`${selectedMember.name} details`, `${selectedMember.name} వివరాలు`)}
          onClick={() => setSelectedMemberId("")}
        >
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-4xl rounded-3xl p-5 md:p-7 ${detailCardClass}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMemberId("")}
              aria-label={tr("Close member details", "సభ్యుడి వివరాలు మూసివేయండి")}
              className={`absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-[#f1f6f3] text-[#1a3c34] hover:bg-[#e8f2ed]"
              }`}
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid grid-cols-1 items-center gap-6 pr-2 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 md:pr-8">
              <div className={`relative mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl aspect-[4/5] ${mutedSurface}`}>
                {selectedMember.photoUrl ? (
                  <Image
                    src={selectedMember.photoUrl}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 768px) 220px, 240px"
                    className="object-cover"
                  />
                ) : null}
              </div>

              <div>
                <h3 className={`text-2xl md:text-3xl font-semibold leading-tight ${titleColor}`}>
                  {selectedMember.name}
                </h3>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.14em] ${roleColor}`}>
                  {tr(selectedMember.role, roleMap[selectedMember.role] ?? selectedMember.role)}
                </p>
                <p className={`mt-4 text-sm md:text-base leading-relaxed ${detailTextColor}`}>
                  {tr(
                    selectedMember.detailDescription || selectedMember.bio || "Add member detailed description here.",
                    selectedMember.detailDescription || bioMap[selectedMember.bio] || "సభ్యుడి వివరమైన వివరణను ఇక్కడ చేర్చండి."
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
