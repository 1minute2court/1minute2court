"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const films = [
  {
    id: 1,
    title: "Chambre 204",
    author: "Jean Dupont",
    year: 2024,
    genre: "Drame",
    category: "Fiction",
    description: "Une histoire brève dans une chambre d'hôtel.",
    vimeoUrl: "https://player.vimeo.com/video/123456789"
  },
  {
    id: 2,
    title: "Silence Béton",
    author: "Claire Moreau",
    year: 2023,
    genre: "Expérimental",
    category: "Expérimental",
    description: "Un voyage visuel à travers une ville silencieuse.",
    vimeoUrl: "https://player.vimeo.com/video/987654321"
  },
  {
    id: 3,
    title: "Minute Papillon",
    author: "Lucie Durand",
    year: 2025,
    genre: "Humour",
    category: "Fiction",
    description: "Une comédie absurde en 60 secondes.",
    vimeoUrl: "https://player.vimeo.com/video/654321098"
  }
];

const categories = ["Tous", ...new Set(films.map(f => f.category))];

export default function Home() {
  con
