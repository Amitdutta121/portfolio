import { ComponentType } from "react";
import UniversalAdaptiveTrainerContent from "./universal-adaptive-trainer";
import NatNatLlmContent from "./nat-nat-llm";
import MyThinkerContent from "./mythinker";
import FlowrContent from "./flowr";
import RaftContent from "./raft";
import RobbContent from "./robb";
import SharebikeContent from "./sharebike";
import MultimodalKdVqaContent from "./multimodal-kd-vqa";
import TrafficAnomalyDetectionContent from "./traffic-anomaly-detection";
import BanglaGraphemePredictionContent from "./bangla-grapheme-prediction";
import FoodRecommendationSystemContent from "./food-recommendation-system";
import RlTradingContent from "./rl-trading";

export const projectContent: Record<string, ComponentType> = {
  "universal-adaptive-trainer": UniversalAdaptiveTrainerContent,
  "nat-nat-llm": NatNatLlmContent,
  mythinker: MyThinkerContent,
  flowr: FlowrContent,
  raft: RaftContent,
  robb: RobbContent,
  sharebike: SharebikeContent,
  "multimodal-kd-vqa": MultimodalKdVqaContent,
  "traffic-anomaly-detection": TrafficAnomalyDetectionContent,
  "bangla-grapheme-prediction": BanglaGraphemePredictionContent,
  "food-recommendation-system": FoodRecommendationSystemContent,
  "rl-trading": RlTradingContent,
};
