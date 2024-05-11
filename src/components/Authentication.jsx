import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();

  // initializing the state
  const [room, setRoom] = useState({
    roomid: "",
    username: "",
  });

  // function to handle change on the input element
  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRoom({ ...room, [name]: value });
  };

  // allow user to create new room,
  // withour any inviting link.
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoom({ ...room, roomid: id });

    toast.success("new room created");
  };

  // join room functionality allows user to join invited,
  // or newly created rooms.
  const joinRoom = () => {
    if (!room.username || !room.roomid) {
      toast.error("Roomid & username are required");
      return;
    }

    // redirecting to the room
    navigate(`/room/${room.roomid}`, {
      state: {
        username: room.username,
      },
    });
  };

  return (
    <div className="py-10 ">
      <div className="flex justify-center">
        <Card className="w-1/4 rounded-xl">
          <CardHeader>
            <CardTitle className=" flex justify-start">Create room</CardTitle>
            <CardDescription className=" flex justify-start">
              Create a room to code with your friends.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-start gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className="flex justify-start ">room id</Label>
                  <Input
                    className="flex justify-start "
                    placeholder="enter your room id here"
                    name="roomid"
                    value={room.roomid}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="flex justify-start ">username</Label>
                  <Input
                    className="flex justify-start "
                    placeholder="enter your usernam here"
                    name="username"
                    value={room.username}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <div className="flex w-full  justify-between">
              <Button variant="outline">cancel</Button>
              <Button onClick={joinRoom}>join room</Button>
            </div>
            <div className="">
              <Label>
                <p className="text-gray-400 font-thin">
                  don't have an invite. create{" "}
                  <span
                    onClick={createNewRoom}
                    className="text-blue-500 font-semibold cursor-pointer underline"
                  >
                    {" "}
                    <Link to="#" className=""></Link>
                    new room
                  </span>{" "}
                  here.
                </p>
              </Label>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Authentication;
