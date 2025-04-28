import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Rankings() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="text-2xl font-bold text-center">Classements IA 2024</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p>Loading...</p>
      </CardContent>
    </Card>
  );
}
