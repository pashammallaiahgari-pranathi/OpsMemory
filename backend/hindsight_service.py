import os
from dotenv import load_dotenv
from hindsight_client import Hindsight

# Load environment variables from backend/.env
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

# Hindsight configuration
BASE_URL = os.getenv("HINDSIGHT_BASE_URL")
API_KEY = os.getenv("HINDSIGHT_API_KEY")

if not BASE_URL:
    raise ValueError("HINDSIGHT_BASE_URL is missing from .env")

if not API_KEY:
    raise ValueError("HINDSIGHT_API_KEY is missing from .env")

# Connect to Hindsight
hindsight = Hindsight(
    base_url=BASE_URL,
    api_key=API_KEY
)

# Our Hindsight memory bank
BANK_ID = "ops-memory"


def remember_incident(incident: str):
    """
    Store a resolved production incident in Hindsight.
    """

    hindsight.retain(
        bank_id=BANK_ID,
        content=incident
    )

    return {
        "success": True,
        "message": "Incident stored in OpsMemory."
    }


def recall_similar_incidents(query: str):
    """
    Search Hindsight for incidents related to the current problem.
    """

    result = hindsight.recall(
        bank_id=BANK_ID,
        query=query
    )

    memories = []

    if result.results:
        for memory in result.results:
            memories.append({
                "type": memory.type,
                "text": memory.text
            })

    return memories