from fastapi import FastAPI
from pydantic import BaseModel

from hindsight_service import (
    remember_incident,
    recall_similar_incidents
)

app = FastAPI(
    title="OpsMemory API",
    description="AI-powered incident memory and response system",
    version="1.0.0"
)


# -----------------------------
# Request Models
# -----------------------------

class IncidentRequest(BaseModel):
    incident: str


class RecallRequest(BaseModel):
    query: str


# -----------------------------
# Home Endpoint
# -----------------------------

@app.get("/")
def home():
    return {
        "name": "OpsMemory",
        "message": "Don't just fix incidents. Remember what they taught you.",
        "status": "running"
    }


# -----------------------------
# Store Incident
# -----------------------------

@app.post("/incidents/remember")
def store_incident(request: IncidentRequest):

    result = remember_incident(request.incident)

    return result


# -----------------------------
# Recall Similar Incidents
# -----------------------------

@app.post("/incidents/recall")
def recall_incidents(request: RecallRequest):

    memories = recall_similar_incidents(request.query)

    return {
        "query": request.query,
        "similar_incidents": memories
    }


# -----------------------------
# Analyze Current Incident
# -----------------------------

@app.post("/incidents/analyze")
def analyze_incident(request: IncidentRequest):

    # Search Hindsight for historical incidents
    memories = recall_similar_incidents(request.incident)

    # Count historical evidence
    historical_incidents = len(memories)

    # Extract previous actions
    previous_actions = []

    for memory in memories:

        text = memory["text"]

        if "increased" in text.lower():
            previous_actions.append(text)

        elif "resolved" in text.lower():
            previous_actions.append(text)

        elif "fixed" in text.lower():
            previous_actions.append(text)

    # Detect recurring pattern
    pattern_detected = historical_incidents > 0

    # Generate basic recommendations
    recommendations = []

    if pattern_detected:
        recommendations.append(
            "Review the historical incidents before taking corrective action."
        )

        recommendations.append(
            "Compare the current incident with previously successful resolutions."
        )

    if previous_actions:
        recommendations.append(
            "Consider the previously successful actions as evidence for the current investigation."
        )

    return {
        "incident": request.incident,
        "pattern_detected": pattern_detected,
        "historical_incidents_found": historical_incidents,
        "previous_actions": previous_actions,
        "recommendations": recommendations,
        "evidence": memories
    }