"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
};

const TEAM_MEMBERS: TeamMember[] = [
    {
    id: "member-1",
    name: "Ch Jaswanth Kumar",
    role: "Tech Member",
    bio: "A passionate coder and problem solver.",
    photoUrl: "/team/JASWANTH KUMAR CHETTUPALLI.png",
    linkedinUrl: "https://linkedin.com/in/jaswanth-kumar-chettupalli-7b0809333",
  },
    {
    id: "member-2",
    name: "Ch Pavan Kumar",
    role: "Full stack Developer Intern",
    bio: "A passionate coder and problem solver.",
    photoUrl: "/team/CHERUKURI PAVAN KUMAR.png",
    linkedinUrl: "https://www.linkedin.com/in/cherukuripavankumar369/",
  },
    {
    id: "member-3",
    name: "Revanth Peethala",
    role: "Web Developer Intern",
    bio: "A passionate coder and problem solver.",
    photoUrl: "/team/REVANTH.jpeg",
    linkedinUrl: "www.linkedin.com/in/revanthpeethala",
  },


];

const EMPTY_CARD_COUNT = 5;

export default function AboutUs() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "bg-transparent" : "bg-[#f2f4f8]";
  const titleColor = isDark ? "text-white" : "text-[#0a0f1a]";
  const copyColor = isDark ? "text-white/70" : "text-slate-600";
  const primaryButtonClass = isDark
    ? "bg-white/10 border border-white/20 text-white hover:bg-white/15"
    : "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50";
  const cardClass = isDark
    ? "bg-white/[0.04] border border-white/15"
    : "bg-white border border-slate-200";
  const roleColor = isDark ? "text-white/50" : "text-slate-500";
  const bioColor = isDark ? "text-white/55" : "text-slate-600";
  const mutedSurface = isDark ? "bg-white/10" : "bg-slate-100";

  const cards =
    TEAM_MEMBERS.length > 0
      ? TEAM_MEMBERS
      : Array.from({ length: EMPTY_CARD_COUNT }, (_, index) => ({
          id: `empty-${index + 1}`,
          name: "",
          role: "",
          bio: "",
          photoUrl: "",
          linkedinUrl: "",
        }));

  return (
    <section className={`py-12 md:py-16 ${sectionBg}`}>
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
                Meet the Builders Behind
                <br />
                WebbHeads
              </h2>

              <p className={`mt-5 max-w-2xl text-base md:text-lg leading-relaxed ${copyColor}`}>
                We&apos;re a hands-on team building high-performance websites,
                automation systems, and growth-focused digital experiences for
                modern brands.
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
                Meet Everyone
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
                className={`mx-auto w-full max-w-[340px] sm:max-w-none rounded-3xl p-4 ${cardClass}`}
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
                      aria-label="Open LinkedIn profile"
                      className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                        isDark
                          ? "bg-black/45 text-white hover:bg-black/60"
                          : "bg-white/90 text-slate-700 hover:bg-white"
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
                    {member.role}
                  </p>
                  <p className={`pt-1 text-sm leading-relaxed line-clamp-2 ${bioColor}`}>
                    {member.bio}
                  </p>
                </div>

                {!hasContent ? (
                  <span className="sr-only">Empty team member slot</span>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
