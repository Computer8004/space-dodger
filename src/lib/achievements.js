// Achievement tiers - client-side validation
export const ACHIEVEMENT_TIERS = {
  bronze: {
    name: 'Bronze Space Pilot',
    description: 'Achieved a score of 1,000+ points in Space Dodger',
    minScore: 1000,
    color: '#CD7F32',
    icon: '🥉'
  },
  silver: {
    name: 'Silver Space Pilot',
    description: 'Achieved a score of 5,000+ points in Space Dodger',
    minScore: 5000,
    color: '#C0C0C0',
    icon: '🥈'
  },
  gold: {
    name: 'Gold Space Pilot',
    description: 'Achieved a score of 10,000+ points in Space Dodger',
    minScore: 10000,
    color: '#FFD700',
    icon: '🥇'
  },
  platinum: {
    name: 'Platinum Space Ace',
    description: 'Achieved a legendary score of 25,000+ points in Space Dodger',
    minScore: 25000,
    color: '#E5E4E2',
    icon: '💎'
  }
};

export function validateAchievement(score, tier) {
  const tierConfig = ACHIEVEMENT_TIERS[tier];
  
  if (!tierConfig) {
    throw new Error(`Invalid tier: ${tier}`);
  }
  
  if (score < tierConfig.minScore) {
    throw new Error(`Score ${score} does not meet ${tier} tier requirement of ${tierConfig.minScore}`);
  }

  return {
    tier: tier,
    score: score,
    name: tierConfig.name,
    description: tierConfig.description,
    icon: tierConfig.icon,
    color: tierConfig.color,
    minScore: tierConfig.minScore
  };
}

export function getEligibleTiers(score) {
  const eligible = Object.entries(ACHIEVEMENT_TIERS)
    .filter(([_, tier]) => score >= tier.minScore)
    .map(([key, tier]) => ({ key, ...tier }));
  
  return { eligible, score };
}
