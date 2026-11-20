# Working with AI on pedagogical questions

The best candidate for automation is the trip from an account to a **discriminating question**. Given two plausible explanations, what could we observe that would make us revise one of them? In the running game, spotting a winning move when someone else runs would tell us more than a second description of the original failure.

## A repeatable inquiry

1. **Record the situation.** Keep the source, page or session reference, whose account it is, the purpose and the observable sequence. Use anonymous descriptions. Mark the participant’s perspective unknown when the account comes only from an observer.
2. **Withhold the ending on a first pass.** Give an AI the observed situation and ask for two plausible explanations, a prediction for each, and one observation that could distinguish them. Record its answer before revealing the practitioner’s interpretation. A source document already encountered during model training can compromise this kind of blind exercise.
3. **Reveal and compare.** Record what the team actually tried and what happened. Mark alternatives as untried. If several factors changed, retain all plausible explanations. Ask the educator which proposal is actionable and which misses something essential about the room.
4. **Return to experience.** When the educational purpose warrants it, try a small variation and record the participant’s response, including disagreement or a different use of the activity. Record a later occasion if the question is learning, and another setting if the question is transfer. A retrospective account can stand on its own when no further session is appropriate.
5. **Revise the claim.** Preserve the original prediction, the outcome, and the reason for changing the interpretation. A useful comparison across cases is one where an adaptation helped in one setting and interfered in another.

### Open question for discussion · practising a part or embedding it in a game

Marc asks when isolating a capacity helps more than practising it within a richer task. For one comparison, specify the purpose, what changes, what stays comparable, and which observation would change the next teaching decision.

Consider three untried handwriting activities. **A:** draw repeated loops from a model. **B:** use the loops to write particular words. **C:** write the same words as clues another player needs to read. A versus B explores practising the component versus using it in letters and words. B versus C retains the writing and introduces a reader with a reason to understand it. A versus C answers a practical choice between two whole activities, but bundles several possible explanations.

Equal minutes answer “What does each activity achieve in the time available?” Matching writing attempts asks what difference context makes at a given practice dose. A child voluntarily writing more clues counts as part of the first effect. For legibility, try a new word with the target letter another day with the same access supports. For willingness to write, offer a genuine opportunity to choose another clue. The published comparisons of handwriting and juggling address neighbouring questions. [Evidence and limits](evidence.md)

**Next decision.** Which purpose motivates this inquiry in practice: legibility that carries over, willingness to write again, or another outcome? That choice determines the comparison. The [colour-and-line case](cases.md#colour-and-line) illustrates the corresponding question for assessment: could two different strategies succeed on every trial we plan to observe?

### Case record to copy

| Field | Entry |
|---|---|
| Source and status | Who reported this? Where? Observed, reported, or hypothetical? |
| Purpose and perspective | What matters here, and to whom? What has the participant communicated? |
| Moment of difficulty | What could a second observer have seen or heard? |
| Explanations and predictions | What might account for it? What would each explanation lead us to expect? |
| Proposed variation | Which demand changes? Which one stays with the participant? |
| Control | Who notices, decides, acts and repairs? What happens if the participant waits? |
| Actual intervention and outcome | What happened, who observed it, and when? Leave unknowns explicit. |
| Inference and limit | What can this case support? Which alternative explanations survive? |

## What could be checked by a machine?

A citation checker can detect a missing source location. A case checker could flag an outcome marked as observed that refers only to a proposed exercise, or a claim of retention with only same-session observations. A human reviewer still has to determine whether a passage supports the interpretation, whether the outcome mattered to the participant, and whether the comparison was fair.

Formal verification goes one step further when the question concerns a **rule of the activity**. In the passing example, consider a player’s choice to wait or cue a restart. Does waiting keep the exchange paused? Can giving the cue actually resume it? These are two different requirements. An arrangement that never restarts meets the first and fails the second. The [restart example](https://github.com/abhuva/adaptive-circus/blob/main/examples/restart.mjs) enumerates both choices for three possible partner rules and prints a witness for each failure.

Run from the repository root with `node examples/restart.mjs`. No installation is needed beyond Node.js. The formal assumption is that the partner follows the stated rule, the cue is perceived, and the system starts paused. The demonstration tests a property of that rule. Whether the participant can produce the cue, whether the partner perceives it, and whether controlling the restart feels meaningful remain field questions.

Lean could express this same finite rule, or prove a property for every length of a sequence. It becomes attractive when we want to combine many rules or prove that a transformation always preserves an ordering. Declaring an empirical premise as an axiom would simply make the result conditional on that premise. For the first case a small executable model makes every assumption inspectable. [Lean language reference](https://lean-lang.org/doc/reference/latest/) · [Lean on axioms](https://lean-lang.org/doc/reference/latest/Axioms)

## A first experiment for Circuswiki

Select ten contrasting, already documented cases with an observed outcome, including cases with disappointing results. Keep the original passage and page beside each extracted observation. Have an educator review a blind first pass for invented details, distinct predictions, and whether at least one proposed contrast would change a real teaching decision. Reveal the endings and record whether the evidence actually distinguishes the predictions. Count unsupported claims and worthwhile new questions separately. Cases without outcomes can suggest hypotheses but cannot evaluate predictions.

This pilot tests whether AI helps educators reason about cases. Evidence of benefit to participants would require another question and appropriate observations. For a more formal single-case investigation, repeated measures and planned comparisons across conditions are relevant tools. Changes introduced together, or improvement after a single exposure, leave causal attribution open. [What Works Clearinghouse glossary](https://ies.ed.gov/ncee/wwc/glossary)
