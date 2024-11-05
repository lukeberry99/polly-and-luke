"use client";

import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    email: "",
    telephone: "",
    accommodation: "",
    dietaryRequirements: "",
    accessibilityRequirements: "",
    songChoice: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    toast({
      title: "RSVP Submitted",
      description: "Thank you for your response!",
    });

    setFormData({
      name: "",
      attending: "",
      email: "",
      telephone: "",
      accommodation: "",
      dietaryRequirements: "",
      accessibilityRequirements: "",
      songChoice: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Can you attend?</Label>
        <RadioGroup
          name="attending"
          value={formData.attending}
          onValueChange={(value) => handleRadioChange("attending", value)}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="attending-yes" />
            <Label htmlFor="attending-yes">Yes, I'll be there</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="attending-no" />
            <Label htmlFor="attending-no">Sorry, I can't make it</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telephone">Telephone</Label>
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          required
          value={formData.telephone}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label>Accommodation on-site request?</Label>
        <RadioGroup
          name="accommodation"
          value={formData.accommodation}
          onValueChange={(value) => handleRadioChange("accommodation", value)}
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="accommodation-yes" />
            <Label htmlFor="accommodation-yes">Yes, please</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="accommodation-no" />
            <Label htmlFor="accommodation-no">No, thank you</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dietaryRequirements">Dietary requirements</Label>
        <Textarea
          id="dietaryRequirements"
          name="dietaryRequirements"
          required
          value={formData.dietaryRequirements}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="accessibilityRequirements">
          Accessibility requirements
        </Label>
        <Textarea
          id="accessibilityRequirements"
          name="accessibilityRequirements"
          required
          value={formData.accessibilityRequirements}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="songChoice">Song of your choice</Label>
        <Input
          id="songChoice"
          name="songChoice"
          required
          value={formData.songChoice}
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit" className="w-full">
        Submit RSVP
      </Button>
    </form>
  );
}
