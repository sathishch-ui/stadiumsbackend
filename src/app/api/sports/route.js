import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    "status": "success",
    "code": 200,
    "message": "",
    "data": {
        "items": [
            {
                "id": 1,
                "sport_name": "Baseball",
                "sport_logo": null,
                "created_at": "2025-04-10T11:57:05.726Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 1,
                        "league_name": "Major League Baseball",
                        "league_abbreviation": "MLB",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    }
                ]
            },
            {
                "id": 3,
                "sport_name": "Basketball",
                "sport_logo": null,
                "created_at": "2025-04-10T11:57:05.741Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 4,
                        "league_name": "NBA",
                        "league_abbreviation": "NBA",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    },
                    {
                        "id": 7,
                        "league_name": "NCAA WOMEN",
                        "league_abbreviation": "NCAAW",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    },
                    {
                        "id": 8,
                        "league_name": "NCAA MEN",
                        "league_abbreviation": "NCAAM",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    }
                ]
            },
            {
                "id": 5,
                "sport_name": "Football",
                "sport_logo": null,
                "created_at": "2025-05-05T14:36:08.545Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 6,
                        "league_name": "National Football League",
                        "league_abbreviation": "NFL",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    },
                    {
                        "id": 10,
                        "league_name": "NCAA Football",
                        "league_abbreviation": "NCAAFB",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    }
                ]
            },
            {
                "id": 4,
                "sport_name": "Ice Hockey",
                "sport_logo": null,
                "created_at": "2025-05-05T14:15:31.559Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 5,
                        "league_name": "NHL",
                        "league_abbreviation": "NHL",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    },
                    {
                        "id": 9,
                        "league_name": "NCAA MEN",
                        "league_abbreviation": "NCAAMH",
                        "league_logo": null,
                        "league_description": null,
                        "is_active": 1
                    }
                ]
            },
            {
                "id": 6,
                "sport_name": "Racing",
                "sport_logo": null,
                "created_at": "2025-05-20T14:43:21.706Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 11,
                        "league_name": "NASCAR",
                        "league_abbreviation": "NASCAR",
                        "league_logo": null,
                        "league_description": "National Association for Stock Car Auto Racing",
                        "is_active": 1
                    }
                ]
            },
            {
                "id": 2,
                "sport_name": "Soccer",
                "sport_logo": null,
                "created_at": "2025-04-10T11:57:05.734Z",
                "is_active": 1,
                "leagues": [
                    {
                        "id": 3,
                        "league_name": "Major League Soccer",
                        "league_abbreviation": "MLS",
                        "league_logo": "https://storage.googleapis.com/stadium_rover_staging/leagues/31f93af7-a0cc-4da3-8b17-e22cf8cb2ae5-MLS.jfif",
                        "league_description": "Soccer league of USA",
                        "is_active": 1
                    }
                ]
            }
        ],
        "totalRecord": 6,
        "totalPages": 1
    }
});
}