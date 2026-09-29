import os
from dotenv import load_dotenv
from hindsight_client import Hindsight

# Load .env from the same folder as this file
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

# Read credentials
base_url = os.getenv("HINDSIGHT_BASE_URL")
api_key = os.getenv("HINDSIGHT_API_KEY")

# Check configuration without exposing the API key
if not base_url:
    raise ValueError("HINDSIGHT_BASE_URL is missing from .env")

if not api_key:
    raise ValueError("HINDSIGHT_API_KEY is missing from .env")

# Connect to Hindsight
client = Hindsight(
    base_url=base_url,
    api_key=api_key
)

# IMPORTANT:
# Use the actual Bank ID from your Hindsight memory bank.
BANK_ID = "ops-memory"

# -----------------------------------------
# 1. STORE AN INCIDENT
# -----------------------------------------

incident = """
Incident INC-001:

The Payment API experienced HTTP 503 errors.

Root cause:
Database connection pool exhaustion.

Resolution:
The engineering team increased the database connection
pool size from 100 to 250.

Outcome:
The incident was successfully resolved in 11 minutes.
"""

client.retain(
    bank_id=BANK_ID,
    content=incident
)

print("✅ Incident stored in Hindsight!")

# -----------------------------------------
# 2. RECALL THE INCIDENT
# -----------------------------------------

result = client.recall(
    bank_id=BANK_ID,
    query="What happened during the Payment API database connection incident?"
)

print("\n🧠 Hindsight recalled:")

if result.results:
    for memory in result.results:
        print(f"- [{memory.type}] {memory.text}")
else:
    print("No matching memories found.")