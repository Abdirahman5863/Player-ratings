"use client";
import { addplayerFormController, intiallFormData } from "@/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { AddPostPlayers } from "@/actions/players";

export default function AddNewPlayer() {
  const [formData, setFormData] = useState(intiallFormData);
  const [popUp, setPopUp] = useState(false);
  async function handleSubmit() {
    const result = await AddPostPlayers(formData);
   if(result) {setPopUp(false);
    setFormData(intiallFormData);}else{
      console.log("player not added");
    }
  }

  return (
    <div>
      <Button onClick={() => setPopUp(true)}>Add Player</Button>
      <Dialog open={popUp} onOpenChange={setPopUp}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Player</DialogTitle>
            <DialogDescription>Add a new player</DialogDescription>
          </DialogHeader>
          <form action={handleSubmit}>
            {addplayerFormController && addplayerFormController.length > 0
              ? addplayerFormController.map((item) => (
                  <div key={item.name}>
                    <Label htmlFor={item.name} className="text-right">
                      {item.label}
                    </Label>
                    <Input
                      id={item.name}
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      required={item.required}
                      value={formData[item.name]}
                      onChange={(event) => setFormData({
                        ...formData,
                        [item.name]:event.target.value,}
                      )
                      }
                    />
                  </div>
                ))
              : null}
            <DialogFooter>
              <Button type="submit">Add Player</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
